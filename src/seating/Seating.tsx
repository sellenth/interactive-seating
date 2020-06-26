import React, { ReactElement } from "react";

/*
export function TestEnv() {
  //const jurors = generateJurors(8);
  //const layout = createLayoutFromJurors(jurors);

  const [ jurors, setJurors ] = useState([]);
  const [ layout, setLayout ] = useState([]);
  useEffect(() => {
    fetchJurors(setJurors, setLayout);
  }, [])


  return (
    <CardView layout={layout} jurors={jurors}/>
  )
}
*/

interface Props {}

export default function Seating({}: Props): ReactElement {
  return <div>Hello</div>;
}
