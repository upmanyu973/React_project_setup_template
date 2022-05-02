export function header({ media, accessToken, Token }) {
  let header = {};
  header["Content-Type"] = !media ? "application/json" : "multipart/form-data";
  if (accessToken) header["x-access-token"] = Token;
  return header;
}
