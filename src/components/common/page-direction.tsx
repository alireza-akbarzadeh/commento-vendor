import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Icon,
} from "components";
import { ROUTE_NAME } from "constant";
import { globalMessages } from "i18n/global.messages";
import React from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";

type PageDirectionProps = {
  directions: {
    title: string;
    link: string;
  }[];
};

export function PageDirection(props: PageDirectionProps) {
  const { directions } = props;
  const { formatMessage } = useIntl();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-normal text-textAndIcon-light text-bodyMedium">
            <NavLink to={ROUTE_NAME.Home}>
              {formatMessage(globalMessages.vendorDashboard)}
            </NavLink>
          </BreadcrumbPage>
          <BreadcrumbSeparator className="text-textAndIcon-light">
            /
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        {directions.map((direction, index) => (
          <React.Fragment key={direction.title}>
            <BreadcrumbItem>
              <NavLink
                className="!font-bold text-textAndIcon-darker text-bodyMedium"
                to={direction.link}
              >
                {direction.title}
              </NavLink>
            </BreadcrumbItem>
            {index < directions.length - 1 && (
              <BreadcrumbSeparator className="text-textAndIcon-light">
                /
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
