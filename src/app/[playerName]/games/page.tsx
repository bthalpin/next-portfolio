import SimpleGame from "@/components/Games/SimpleGame";
import { Suspense } from "react";

type Props = {
    params: Promise<{ playerName: string; }>;
}
export default async function Page ({ params }: Props) {
    
    const { playerName } = await params;
    return (
        <Suspense fallback={<></>}>
            <SimpleGame playerName={playerName}/>
        </Suspense>
    )
}