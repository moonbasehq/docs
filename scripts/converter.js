const fs = require('fs');

// This will be changed to support getting latest api spec
const openApiSpec = JSON.parse(fs.readFileSync('./mock.json', 'utf8'));

const mdxContent = convertToMdx(openApiSpec);

Object.keys(mdxContent).forEach((tag) => {
  fs.writeFileSync(`./pages/apiDocs/${tag}.mdx`, mdxContent[tag], 'utf8');
});

function convertToMdx(openApiSpec) {
  const mdxContent = {};

  // Convert paths
  for (const [path, methods] of Object.entries(openApiSpec.paths)) {
    let currentGroupedContent = '';
    // Replace path parameters with colon-prefixed placeholders
    const pathWithPlaceholders = path.replace(/{([^}]+)}/g, ':$1');
    currentGroupedContent += `## ${pathWithPlaceholders}\n\n`;

    // Convert methods
    for (const [method, details] of Object.entries(methods)) {
      const tag = details.tags[0].toLowerCase().trim().replace(' ', '-');
      currentGroupedContent += `### ${method.toUpperCase()}\n\n`;
      currentGroupedContent += `- Operation ID: ${details.operationId}\n`;
      currentGroupedContent += `- Summary: ${details.summary}\n`;
      currentGroupedContent += `- Description: ${details.description}\n\n`;

      // Convert parameters (if any)
      if (details.parameters) {
        currentGroupedContent += '#### Parameters\n\n';
        currentGroupedContent +=
          '| Name | In | Required | Type | Description |\n';
        currentGroupedContent +=
          '| ---- | -- | -------- | ---- | ----------- |\n';

        for (const param of details.parameters) {
          currentGroupedContent += `| ${param.name} | ${param.in} | ${
            param.required
          } | ${param.schema.type} | ${param.description || ''} |\n`;
        }

        currentGroupedContent += '\n';
      }

      // Convert responses (if any)
      if (details.responses) {
        currentGroupedContent += '#### Responses\n\n';

        for (const [statusCode, response] of Object.entries(
          details.responses
        )) {
          currentGroupedContent += `**${statusCode}**:\n`;
          currentGroupedContent += `- Description: ${
            response.description || ''
          }\n`;

          // Convert response content (if available)
          if (response.content) {
            currentGroupedContent += '##### Content\n\n';

            for (const [contentType, contentDetails] of Object.entries(
              response.content
            )) {
              currentGroupedContent += `**${contentType}**:\n`;
              currentGroupedContent += '```json\n';
              currentGroupedContent += JSON.stringify(
                contentDetails.schema,
                null,
                2
              );
              currentGroupedContent += '\n```\n';
            }
          }
        }

        currentGroupedContent += '\n';
      }
      if (typeof mdxContent[tag] === 'string') {
        mdxContent[tag] += currentGroupedContent;
      } else {
        mdxContent[tag] = currentGroupedContent;
      }
    }
  }

  return mdxContent;
}
