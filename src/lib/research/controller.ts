export async function executeResearch(
  prompt: string
) {

  const response = await fetch(
    "/api/research",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        prompt,
      }),
    }
  );

  const data =
    await response.json();

  if (!data.success) {

    throw new Error(
      data.error ??
      "Research failed."
    );

  }

  return data;

}