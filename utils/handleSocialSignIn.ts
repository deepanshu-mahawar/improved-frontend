export const handleSocialSignIn = (
  provider: string,
  setSocialError: (error: string) => void,
  baseUrl: string,
) => {
  try {
    window.location.href = `${baseUrl}/auth/${provider}`;
  } catch (error) {
    setSocialError(
      `Failed to sign in using social media: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    );
  }
};
