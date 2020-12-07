import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { setUser } from "../../auth";

export const LoginFormFeature = () => {
  const { t } = useTranslation();
  const onClick = () => {
    setUser("someone");
    globalThis.location.reload();
  };

  return (
    <form>
      <Grid container direction="column" alignContent="center" spacing={2}>
        <Grid item>
          <TextField id="email" label={t("emailOrPhone")} variant="filled" />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label={t("password")}
            type="password"
            variant="filled"
          />
        </Grid>
        <Button onClick={onClick}>{t("signin")}</Button>
      </Grid>
    </form>
  );
};
