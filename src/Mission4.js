import Layout from "./jsx/Layout";
import WhiteBox from "./jsx/WhiteBox";
import TextBox from "./jsx/TextBox";

export default function App() {
  return (
    <Layout>
      <WhiteBox>
        <TextBox
          title="Customer dashboard"
          text1="iew a summary of all your customers over the last month."
        />
        <TextBox
          title="Customer dashboard"
          text1="iew a summary of all your customers over the last month."
        />
        <TextBox
          title="Customer dashboard"
          text1="iew a summary of all your customers over the last month."
        />
      </WhiteBox>
    </Layout>
  );
}

// export default App;
