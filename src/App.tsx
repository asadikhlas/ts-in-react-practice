import "./App.css";
import CssTest from "./components/CssTest";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Toast from "./components/Toast";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/useContext";
import List from "./components/generic/List";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";
import Counter from "./components/state/counter";

function App() {
  const personList = [
    {
      first: "Asad",
      last: "Ikhlas",
    },
    {
      first: "Asad",
      last: "Ikhlas",
    },
    {
      first: "Asad",
      last: "Ikhlas",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name={"Hello this is greet"} /> */}
      {/* <Person name={{ first: "Asad", last: "Ikhlas" }} />
      <PersonList list={personList} /> */}
      {/* <PersonList list={personList} />
      <Statuses status="loading" />
      <Children>Hello world</Children> */}
      {/* <Button
        handleClick={(event, id) => console.log("INSIDE CLICK", { event, id })}
      /> */}
      {/* <CssTest
        styles={{ border: "1px solid red", padding: 10, display: "flex" }}
      /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["Asad", "Ikhlas", "Umair"]}
        onClick={(item) => console.log("ITEM", item)}
      />
      <List items={[1, 0, 12]} onClick={(item) => console.log("ITEM", item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: "Asad",
            last: "Ikhlas",
          },
          {
            id: 2,
            first: "Asad",
            last: "Ikhlas",
          },
        ]}
        onClick={(item) => console.log("ITEM", item)}
      /> */}
      {/* <Toast position="center" /> */}
      <CustomButton
        variant="primary"
        onClick={() => console.log("Button clicked")}
      >
        Primary Button
      </CustomButton>
      <Text as={"h1"}>Heading one</Text>
      <Text as={"h1"} color="primary" size="small">
        paragrraoh
      </Text>
      <Text as={"label"} htmlFor="someid" color="primary" size="small">
        paragrraoh
      </Text>
    </div>
  );
}

export default App;
