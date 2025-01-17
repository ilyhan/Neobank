import RoutesProvider from "@/router/RoutesProvider";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function App() {
  return (
    <Provider store={store}>
      <RoutesProvider />
    </Provider>
  )
}

export default App
