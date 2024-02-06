const fs = require('fs');

// This will be changed to support getting latest api spec
const openApiSpec = JSON.parse(fs.readFileSync('./mock.json', 'utf8'));

const mdxContent = convertToMdx(openApiSpec);

fs.writeFileSync('./pages/apiDocs.mdx', mdxContent, 'utf8');

function convertToMdx(openApiSpec) {
  let mdxContent = '';

  // Convert paths
  for (const [path, methods] of Object.entries(openApiSpec.paths)) {
    // Replace path parameters with colon-prefixed placeholders
    const pathWithPlaceholders = path.replace(/{([^}]+)}/g, ':$1');

    mdxContent += `## ${pathWithPlaceholders}\n\n`;

    // Convert methods
    for (const [method, details] of Object.entries(methods)) {
      mdxContent += `### ${method.toUpperCase()}\n\n`;
      mdxContent += `- Operation ID: ${details.operationId}\n`;
      mdxContent += `- Summary: ${details.summary}\n`;
      mdxContent += `- Description: ${details.description}\n\n`;

      // Convert parameters (if any)
      if (details.parameters) {
        mdxContent += '#### Parameters\n\n';
        mdxContent += '| Name | In | Required | Type | Description |\n';
        mdxContent += '| ---- | -- | -------- | ---- | ----------- |\n';

        for (const param of details.parameters) {
          mdxContent += `| ${param.name} | ${param.in} | ${param.required} | ${
            param.schema.type
          } | ${param.description || ''} |\n`;
        }

        mdxContent += '\n';
      }

      // Convert responses (if any)
      if (details.responses) {
        mdxContent += '#### Responses\n\n';

        for (const [statusCode, response] of Object.entries(
          details.responses
        )) {
          mdxContent += `**${statusCode}**:\n`;
          mdxContent += `- Description: ${response.description || ''}\n`;

          // Convert response content (if available)
          if (response.content) {
            mdxContent += '##### Content\n\n';

            for (const [contentType, contentDetails] of Object.entries(
              response.content
            )) {
              mdxContent += `**${contentType}**:\n`;
              mdxContent += '```json\n';
              mdxContent += JSON.stringify(contentDetails.schema, null, 2);
              mdxContent += '\n```\n';
            }
          }
        }

        mdxContent += '\n';
      }
    }

    mdxContent += '\n';
  }

  return mdxContent;
}
