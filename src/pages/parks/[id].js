import { useRouter } from "next/router";

export default function Park() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <p>Here is the show page for park {id}</p>
      <p>
        It will work for anything I type in the url e.g.
        localhost:3000/parks/banana
      </p>
    </>
  );
}
