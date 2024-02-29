import ListadoOldMan from "./ListadoOldman";
import { oldManD } from "./oldMen.model";

export default function MostrarOldman() {
   //const [oldmen, setGeneros] = useState<oldManDTO[]>([]);
   const oldmen: oldManD[] = [
      {
         id: 1,
         nombre: "Mario Cortez",
         foto: "https://s3-alpha-sig.figma.com/img/e082/fa65/a1cf7d8483eb86b508be3fd2ba94228b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSVZzlrzI8Fg7worejeFmbVYdw2YUGE7u~53tfGoJBqVVoyuuEE8-1hNpQq5w987NNwP~6ooM~0gMGra7zqBwS-t2kvDY6jY5DszvrhreyJ0bGORZZ6teqOTDf9JEA9q~0GpB087~~Me0-LeuJ8S6CwfhUPt7LaxukPpl9JZBFtSB2WLy6WUmj3LxIpz9bxgyDUnwHuq~pK3mweLMZu-ZbRY9WrBH7sBMDTR2GQfm3HrfC-iTYOvIheqBZ5PK7g7QNSPCs6qbExB6iTbZgzoyNZ8WpJP9P6vnHKoa8cjrvIkcNHiGhWyt2lascXVMHISsjmZiGf8QhVLjC2D~76nlg__",
         profesion: "Jubilado",
      },
      {
         id: 2,
         nombre: "Gloria Matter",
         foto: "https://s3-alpha-sig.figma.com/img/23c6/567b/258caca20676f2bb7ecb66274e59a140?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNwCixPU0~Ve-xtGQJHzH6BFZLfhnrenCUVLwaQEl889CeXGNREH9l-XLXzkf2erdYoycBdaZjr~wQif02EDRjqAY~UNypaNtlx1qndKJmR4khFrt8Bnq-PBsX6-tANYJ57xbb8eUa3yqOCdkoP4mL2m4SDvklIY3cvGxnXLMKxjEDPjrTbjgLf2BHEKQKbQFU6pRHmflEG3ZsB0Naq8LQz50lDaUQPXjPesFnvZ9J09lLnY-B~3gQcBzhReHvkjeNY433Tk2-DeL9FVMfnFxTARZVOiOPJ6W447Cp6jtR1VGhVfaCOEwq4drx1Jg97syfS-2p3j4J3Sg7J5NXctzg__",
         profesion: "Docente",
      },
      {
         id: 3,
         nombre: "Fabiola Ramirez",
         foto: "https://s3-alpha-sig.figma.com/img/cb08/692f/d21ea0d3659b9302ccc60f20ecf06b4d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3iyKFvAuGYsUcMH5tqnd-9jfly1y-sKMeH8gd5sth4q3dBGxyLh6lbuf9W4XLepy3LGURj1EBvRGY6SaVRwTOEK8uMma7EBmLZ3ZmcJXKKhHc6wgmZM710uwD0JsNkUHhndxji5pEfSXVoLPNyZaAa3Etc-hNArx9J1VO0Q4y8e29pcSaCLRwjN1Pqy~eH6xSJwjenqS52vhWA-JcD69T2KgSazurPmOW9Q6n31RnCRyAX~dmL-WNBqJGm3idalmBiGUfg-t03q9uO8h8zZvHgUAYhZ5~Fymx1q0haEpE9QcpcBmNP7N0eH-IHnZnPrqhj3lVDeOZgfFOAQrf54Vg__",
         profesion: "Acompañante",
      },
      {
         id: 4,
         nombre: "Juan Perez",
         foto: "https://s3-alpha-sig.figma.com/img/554e/c248/02c2973e48c209a2893adb8302fa8b16?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QS0mJsM89UX44CvYIhW~nX3HCf~ypLcUcgDuDR5YL~kRADM-QOU5N~SJX3bQAElfIcKFkd7e8Al7qwX19yPm3Ec6xkPsQPz~2FuAESQvou5owhpXlAqDNHBeOs2gJ01eDN1ZqUDdDiCPE04NSAskfwToLtMPs0g2EoeS7~xxzhI9mVnOdy2C-YWbO8W1eOyaTPET-RWNdBehFxySrROVJ7EKQIayzA-t46O8t17shSwxieutjoW9NHyhsIQEXdtHfA5lv2vefGA5f2soEY3w9AD6tyOgNNDOjOv9vHPcsKLQzKJaA9IJHpZ9oLvUagnKkoZcaYc5JD7XjLSK4P1KAg__",
         profesion: "Jubilado",
      },
   ];
   return (
      <>
         <div className="flex">
            {oldmen.map((oldman) => (
               <ListadoOldMan oldman={oldman} key={oldman.id} />
            ))}
         </div>
      </>
   );
}
