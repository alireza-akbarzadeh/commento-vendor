import { Button, Icon, ProfileImg } from 'components';
import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';
import { cn } from 'lib/utils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProfileMenuList } from '../constant';

export function ProfileSidebar() {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  return (
    <div className="col-span-3 border border-border-lighter rounded-S p-6">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <ProfileImg size="large" src="https://github.com/shadcn.png" />
        <h3 className="text-textAndIcon-dark text-titleMedium">
          فروشگاه دیجی لند
        </h3>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        {ProfileMenuList.map(({ icon, link, name }) => (
          <Button
            key={link}
            variant="text"
            onClick={() => navigate(`/profile?page=${link}`)}
            fullWidth
            className={cn(
              'justify-start text-labelLarge transition-all duration-300',
              {
                'bg-primary-main text-textAndIcon-lightest':
                  link === currentPage,
              }
            )}
          >
            <span
              className={cn('transition-transform duration-300', {
                'scale-125': link === currentPage,
              })}
            >
              <Icon name={icon} />
            </span>
            <span className="pr-3">
              {formatMessage(
                profileMessages[name as keyof typeof profileMessages]
              )}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
