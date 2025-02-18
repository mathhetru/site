type Subscriber = {
  email: string;
  firstName: string;
  lastName: string;
};

export const postSubscriber = async (subscriber: Subscriber) => {
  const config = useRuntimeConfig();
  const host = config.public.apiBase;
  const apiSecret = config.public.apiSecret;
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
    return response;
  } catch (error) {
    console.error(error);
  }
};
