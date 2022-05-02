import axios from "axios";
import { header } from "./header";

export const GET = async (url, headers, params) => {
  let Token = "";
  let h = header({ ...headers, Token });
  var data;
  try {
    await axios
      .get(url, { params, headers: h })
      .then((res) => {
        data = { res, error: false };
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          data = { error: error?.response?.data, res: false };
        } else {
          data = { error: error?.response?.data, res: false };
        }
      });
  } catch (error) {
    data = { error: error?.response?.data, res: false };
  }
  return data;
};

export const POST = async (url, Body, headers) => {
  var data;
  let Token = "";
  let h = headers({ ...headers, Token });
  const config = {
    headers: h,
  };

  try {
    const body = JSON.stringify(Body);
    await axios
      .post(url, body, config)
      .then((res) => {
        data = { res, error: false };
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          data = { error: error?.response?.data, res: false };
        } else {
          data = { error: error?.response?.data, res: false };
        }
      });
  } catch (error) {
    data = { error: error?.response?.data, res: false };
  }
  return data;
};
