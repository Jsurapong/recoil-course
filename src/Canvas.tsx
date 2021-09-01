import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Rectangle } from "./components/Rectangle/Rectangle";
import { PageContainer } from "./PageContainer";
import { Toolbar } from "./Toolbar";

export const selectedElementState = atom<number | null>({
  key: "selectedElement",
  default: null,
});

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
      <Toolbar />
      {elements.map((id, index) => (
        <Rectangle key={index} id={id} />
      ))}
    </PageContainer>
  );
}

export default Canvas;
