import React, { useState, FunctionComponent } from "react";
import styles from "./CardView.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RGL, { WidthProvider } from "react-grid-layout";
import { JurorType } from "../dummies/Jurors";
import { CardHolder } from "./card/CardHolder";

const GridLayout = WidthProvider(RGL);

type CardProps = {
  layout: ReactGridLayout.Layout[];
  jurors: JurorType[];
};

export const CardView: FunctionComponent<CardProps> = ({ layout, jurors }) => {
  return (
    <GridLayout
      className={styles.layout}
      layout={layout}
      verticalCompact={true}
      compactType="horizontal"
      autoSize={false}
      cols={Math.ceil(Math.sqrt(layout.length))}
      maxRows={Math.ceil(Math.sqrt(layout.length))}
      rowHeight={150}
    >
      {!!layout &&
        layout.map((_, i) => {
          return (
            <div key={i.toString()}>
              {(i < jurors.length && 
                <CardHolder juror={jurors[i]} />) ||
                <CardHolder />}
            </div>
          );
        })}
    </GridLayout>
  );
};
