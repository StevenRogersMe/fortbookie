import AuthRoutes from 'screens/auth/route';
import HomeRoutes from 'screens/home/route';
import EventsRoutes from 'screens/events/route';
import HelpRoutes from 'screens/help/route';
import LiveEventsRoutes from 'screens/live-events/route';
import PlayerRankingsRoutes from 'screens/player-rankings/route';
import TransitionsRoutes from 'screens/transactions/route';
import RewardsRoutes from 'screens/rewards/route';
import DepositRoutes from 'screens/deposit/route';
import WithdrawRoutes from 'screens/withdraw/route';
import ReferralsRoutes from 'screens/referrals/route';

const routes = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...EventsRoutes,
  ...HelpRoutes,
  ...LiveEventsRoutes,
  ...PlayerRankingsRoutes,
  ...TransitionsRoutes,
  ...RewardsRoutes,
  ...DepositRoutes,
  ...WithdrawRoutes,
  ...ReferralsRoutes
];

export default routes;
