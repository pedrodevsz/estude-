
export async function validateEmail(email: string) { // função para validar email
  const apiKey = process.env.NEXT_PUBLIC_ABSTRACT_API_KEY;
  const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao verificar e-mail");

  const data = await res.json();

  return {
    isValidFormat: data.is_valid_format?.value,
    isDisposable: data.is_disposable_email?.value,
    isMXFound: data.is_mx_found?.value,
    isSMTPValid: data.is_smtp_valid?.value,
    qualityScore: data.quality_score,
    suggestion: data.autocorrect,
  };
}
