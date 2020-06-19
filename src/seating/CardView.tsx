import React, { useState, FunctionComponent } from "react";
import styles from "./CardView.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RGL, { WidthProvider } from "react-grid-layout";
import { JurorType } from "../dummies/Jurors";
import Card from "./card/Card";

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
      rowHeight={60}
    >
      {jurors.map((j, i) => {
        return (
          <Card key={String.fromCharCode(i + 97)}></Card>
        );
      })}
    </GridLayout>
  );
};
