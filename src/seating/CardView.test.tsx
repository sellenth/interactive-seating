import React from "react";
import { render } from '@testing-library/react'
import { CardView } from "./CardView";
import { CardHolder } from "../card/CardHolder";

describe('<CardHolder />', () => {
  it('renders a single card', () => {
    render(<CardHolder juror={{name: "Halston", age: 22}} />)
  })

  it('renders testing env', () => {
    render(<CardView layout={[]} jurors={[]}/>)
  })
});