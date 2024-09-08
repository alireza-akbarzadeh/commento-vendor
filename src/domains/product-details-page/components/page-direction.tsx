import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'components';

export function PageDirection() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-textAndIcon-light text-bodyMedium">
            لیست محصولات
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-textAndIcon-light">
          /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>گوشی موبایل</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
