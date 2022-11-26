import { AUTHENTICATION_WEB_API } from '../util/helpers';

export const signup = async (enteredEmail, enteredPassword) => {
  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTHENTICATION_WEB_API}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'applicaton/json',
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const res = await response.json();
      console.log(res);
      throw new Error(res.error.message);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};
