import ClientWrapper from "@/components/ClientWrapper";
import DataFetch from "@/components/DataFetch";

export default function Page() {
  return (
    <>
      <ClientWrapper name="client">
        <DataFetch name="fetch" />
      </ClientWrapper>
    </>
  );
}
