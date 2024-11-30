import axios from "axios";

const BASE_URL = "https://long-donielle-elysium-91976564.koyeb.app/";

const sendEmail = async (
  from_email: string,
  subject: string,
  message: string
) => {
  const response = await axios.post(BASE_URL, { from_email, subject, message });
  return response.data;
};

export default sendEmail;
