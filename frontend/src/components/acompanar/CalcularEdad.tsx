export default function CalcularEdad(birthdate: string): string {
   const today = new Date();
   const birthDate = new Date(birthdate);
   const ageInMilliseconds = today.getTime() - birthDate.getTime();
   const ageDate = new Date(ageInMilliseconds);

   const years = ageDate.getUTCFullYear() - 1970;
   //const months = ageDate.getUTCMonth();
   //const days = ageDate.getUTCDate();

   return `${years} años,`;
}
