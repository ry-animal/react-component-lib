import { LoaderProps } from "./index.interface";
import { IconImage, IconWrapper, LoaderCircle, Spinner } from "./index.styled";

export function Loader({ icon, large, color }: LoaderProps) {
  return (
    <LoaderCircle large={large}>
      <Spinner large={large} color={color} />
      {icon && (
        <IconWrapper large={large}>
          <IconImage src={icon} alt={"Icon"} />
        </IconWrapper>
      )}
    </LoaderCircle>
  );
}
