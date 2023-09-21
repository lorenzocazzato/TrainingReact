import { useContext } from "react";
import { ContestoContatore } from "./contatore";

export default function VisualizzaContatore2() {
  const count = useContext(ContestoContatore);
  return (
    <>
      <h1>
        The Count is:
        {count}
      </h1>
    </>
  );
}
