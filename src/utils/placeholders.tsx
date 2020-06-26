import { JurorType } from "../types/Jurors";

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function generateJurors(number: number): JurorType[] {
  const Jurors: JurorType[] = [];
  for (let i = 0; i < number; i++) {
    Jurors.push({
      first_name: `Juror ${i}`,
      risk_score_ai: getRandomInt(100).toString(),
    });
  }
  return Jurors;
}

export function createLayoutFromJurors(
  jurors: JurorType[]
): ReactGridLayout.Layout[] {
  const sideLength = Math.ceil(Math.sqrt(jurors.length));
  let x = 0;
  let y = 0;
  const layout = [];
  for (let i = 0; i < sideLength ** 2; i++) {
    layout.push({
      i: i.toString(),
      x: x,
      y: y,
      w: 1,
      h: 1,
    });
    x += 1;
    if (x >= sideLength) {
      x = 0;
      y += 1;
    }
  }
  return layout;
}
