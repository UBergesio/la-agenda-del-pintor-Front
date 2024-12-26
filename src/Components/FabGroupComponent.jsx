import * as React from "react";
import { FAB, Portal, PaperProvider } from "react-native-paper";

const FabGroupComponent = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "calendar-today" : "plus"}
          actions={[
            {
              icon: "plus",
              label: "Agregar trabajo",
              onPress: () => console.log("Pressed add"),
              style: { backgroundColor: "rgb(98, 184, 184)" },
            },

            {
              icon: "account-arrow-right",
              label: "Pasar al siguiente trabajo",
              style: { backgroundColor: "rgb(98, 184, 184)" },
              onPress: () => console.log("Pressed notifications"),
            },
            {
              icon: "account-arrow-left",
              label: "Dias atrasados",
              style: { backgroundColor: "rgb(98, 184, 184)" },
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "account-cancel",
              label: "Quitar trabajo",
              style: { backgroundColor: "rgb(98, 184, 184)" },
              onPress: () => console.log("Pressed star"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
          fabStyle={{ backgroundColor: "#008b8b" }}
          backdropColor="rgba(0, 139, 139, 0.06)"
        />
      </Portal>
    </PaperProvider>
  );
};

export default FabGroupComponent;
