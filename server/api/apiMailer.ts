type Subscriber = {
  email: string;
  firstName: string;
  lastName: string;
};

export default defineEventHandler<{ body: Subscriber }>(async (event) => {
  const config = useRuntimeConfig();
  const host = config.apiBase;
  const apiSecret = config.apiSecret;
  const subscriber = await readBody(event);

  try {
    const response = await fetch(`${host}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiSecret}`,
      },
      body: JSON.stringify({
        email: subscriber.email,
        fields: {
          name: subscriber.firstName,
          last_name: subscriber.lastName,
        },
      }),
    });

    if (response.status === 200) {
      setResponseStatus(event, 200);
    }

    if (response.status === 201) {
      setResponseStatus(event, 201);
    }
    return response;
  } catch (error) {
    setResponseStatus(event, 500);
    throw createError({
      statusCode: 500,
      statusMessage: `An error occurred while sending the email: ${error}`,
    });
  }
});
