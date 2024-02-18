// Background color for request methods
const ACTION_COLOR_MAPPING = {
  GET: 'green',
  DELETE: 'red',
  PATCH: 'orange',
  POST: 'blue',
};

const OPEN_API_SPEC_ENDPOINT = 'http://api.moonbase.hqdev:8085/v1/openapi.json' 

module.exports = {
  ACTION_COLOR_MAPPING,
  OPEN_API_SPEC_ENDPOINT
};
