import { useState } from "react";
import sendEmail from "../../services/contactService.ts";

const useHandleEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    from_email: string,
    subject: string,
    message: string
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const result = await sendEmail(from_email, subject, message);
      setSuccess(true);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error has occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error, success };
};

export default useHandleEmail;
