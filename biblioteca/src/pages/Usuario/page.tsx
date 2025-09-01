import { Progress } from "@chakra-ui/react";
import { PersonComponent } from "../../components/PersonComponent";

export default function Usuario() {
  return (
    <div className="w-full h-full flex justify-around items-center">
        <div className="w-1/2 flex justify-center items-center">
            <PersonComponent />
        </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <Progress.Root width="450px" variant="subtle" defaultValue={40} shape="full">
            <h1 className="!text-[22px] !font-black">QUANTIDADE EMPRESTADOS</h1>
          <Progress.Track bg="white" h="40px">
            <Progress.Range bg="#475383" rounded="full"/>
          </Progress.Track>
        </Progress.Root>

        <Progress.Root width="450px" variant="subtle" defaultValue={90} shape="full">
          <h1 className="!text-[22px] !font-black">QUANTIDADE DOADOS</h1>
          <Progress.Track bg="white" h="40px">
            <Progress.Range bg="#475383" rounded="full"/>
          </Progress.Track>
        </Progress.Root>

        <Progress.Root width="450px" variant="subtle" defaultValue={10} shape="full">
          <h1 className="!text-[22px] !font-black">QUANTIDADE AVALIADOS</h1>
          <Progress.Track bg="white" h="40px">
            <Progress.Range bg="#475383" rounded="full"/>
          </Progress.Track>
        </Progress.Root>
      </div>
    </div>
  );
}
