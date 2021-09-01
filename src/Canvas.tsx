import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Rectangle } from "./components/Rectangle/Rectangle";
import { PageContainer } from "./PageContainer";
import { Toolbar } from "./Toolbar";
import { EditProperties } from "./EditProperties";
import { selectedElementState } from "./components/Rectangle/Rectangle";

export const elementState = atom<number[]>({ key: "elements", default: [] });

function Canvas() {
  const elements = useRecoilValue(elementState);
  const setSelectedElement = useSetRecoilState(selectedElementState);

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}
    >
      <EditProperties />
      <Toolbar />
      {elements.map((id, index) => (
        <Rectangle key={index} id={id} />
      ))}
    </PageContainer>
  );
}

export default Canvas;
