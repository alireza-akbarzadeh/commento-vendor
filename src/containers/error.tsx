import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  Button,
  CardHeader,
  CardTitle,
  Icon,
} from "components";
import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError() as Error;
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    navigator.clipboard.writeText(errorMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div
      id="error"
      dir="ltr"
      className="flex h-screen items-center justify-center bg-gray-100 p-4"
    >
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-3xl font-bold text-red-600">
            <Icon name="info-circle" className="mr-2 h-8 w-8" />
            Oops...
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          {isRouteErrorResponse(error) ? (
            <p className="text-2xl font-semibold">This page does not exist.</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold">
                We are sorry, something went wrong
              </h2>
              <p className="text-lg text-gray-600">
                We cannot process your request at this moment.
              </p>
              {error instanceof Error && (
                <div className="flex items-center gap-1 rounded-XS bg-gray-200 p-2 text-sm text-gray-800">
                  <Button
                    variant="text"
                    size="small"
                    className=""
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <Icon name="ApproveTick" className="text-green-500" />
                    ) : (
                      <Icon name="clipboard-1" />
                    )}
                  </Button>
                  <p className="text-justify font-semibold leading-relaxed text-textAndIcon-darker text-labelLarge">
                    {error.message}
                  </p>
                </div>
              )}
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <NavLink to="/">
            <Button className="flex items-center">
              <Icon name="House" className="mr-2" />
              Back to Home
            </Button>
          </NavLink>
          <Button variant="outline" onClick={copyToClipboard}>
            {copied ? "Copied!" : "Copy Error"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
