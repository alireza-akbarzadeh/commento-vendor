import { Button } from "components";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "components/ui/card/card";

import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom";

export function ErrorBoundray() {
  const error = useRouteError() as Error;

  return (
    <div
      id="error"
      className="flex h-screen items-center justify-center bg-gray-500/40"
    >
      {isRouteErrorResponse(error) ? (
        <p className="text-3xl font-bold">This page does not exist..</p>
      ) : (
        <Card className="space-y-6">
          <CardHeader>Ops..</CardHeader>
          <CardContent>
            <h2 className="mb-4 text-2xl font-bold">
              We are sorry... something went wrong
            </h2>
            <p className="mb-2 text-lg">
              We cannot process your request at this moment.
            </p>
            {error && (
              <p className="mb-4 text-sm text-red-500">
                ERROR: {error.message}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button fullWidth variant="info">
              <NavLink to="/">Try again</NavLink>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
