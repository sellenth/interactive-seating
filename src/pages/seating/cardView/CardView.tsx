import React, { useState, FunctionComponent, useEffect } from "react";
import styles from "./CardView.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RGL, { WidthProvider } from "react-grid-layout";
import { JurorType } from "types/Jurors";
import { CardHolder } from "../card/CardHolder";
import { JurorModal } from "../jurorModal/JurorModal";

const GridLayout = WidthProvider(RGL);

type CardProps = {
  layout: ReactGridLayout.Layout[];
  jurors?: JurorType[];
};

export const CardView: FunctionComponent<CardProps> = ({ layout, jurors }) => {
  const [visible, setVisibility] = useState(false);
  const [currJuror, setCurrJuror] = useState(0);
  if (jurors) {
    return (
      <>
        <GridLayout
          className={styles.layout}
          layout={layout}
          useCSSTransforms={true}
          containerPadding={[5, 5]}
          verticalCompact={true}
          compactType="horizontal"
          autoSize={true}
          cols={Math.ceil(Math.sqrt(layout.length))}
          maxRows={Math.ceil(Math.sqrt(layout.length))}
          rowHeight={150}
        >
          {!!layout &&
            layout.map((_, i) => {
              return (
                <div key={i.toString()}>
                  {(i < jurors.length && (
                    <CardHolder
                      juror={jurors[i]}
                      setVisibility={setVisibility}
                      setCurrJuror={() => setCurrJuror(i)}
                    />
                  )) || <CardHolder />}
                </div>
              );
            })}
        </GridLayout>
        <JurorModal
          juror={jurors[currJuror]}
          visible={visible}
          setVisibility={setVisibility}
        />
      </>
    );
  } else {
    return (
      <div>
        <h1>CardView Placeholder</h1>
      </div>
    );
  }
};
