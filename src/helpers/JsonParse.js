export function jsonParse(data) {
  try {
    const values = data.recordset[0];
    const v_key = Object.keys(values)[0];
    return JSON.parse(values[v_key]);
  } catch (error) {
    throw error;
  }
}

export default jsonParse;
