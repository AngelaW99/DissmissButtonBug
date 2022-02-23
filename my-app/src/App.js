import './App.css';
import React from "react";
import { MessageBar, Text, MessageBarType, MessageBarButton, Link } from "@fluentui/react";
import styles from "./App.css";

function App() {
  const  onDismiss = () => alert("Pressed");

  const icon = {
    iconName: "Recent",
    className: styles.recent,
  };
  return (
    <div >
      <MessageBar
        messageBarType={MessageBarType.error}
        isMultiline={false}
        onDismiss={onDismiss}
        dismissButtonAriaLabel="Close"
        messageBarIconProps={icon}
        actions={<MessageBarButton>button</MessageBarButton>}>
          <Text variant={"smallPlus"} className={styles.text}>
            message
          </Text>
      </MessageBar>
      <br />
      <MessageBar
        messageBarType={MessageBarType.error}
        isMultiline={false}
        onDismiss={onDismiss}
        dismissButtonAriaLabel="Close"
      >
        Error MessageBar with single line, with dismiss button.
        <Link href="www.bing.com" target="_blank" underline>
          Visit our website.
        </Link>
      </MessageBar>
    </div>
  );
}

export default App;
