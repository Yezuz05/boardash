<template>
  <div class="sidebar">
    <md-card>
      <md-card-header>
        <md-avatar>
          <img src="@/assets/img/avatar.jpg" alt="Avatar" />
        </md-avatar>

        <div class="md-title">Welcome Essie</div>
        <div class="md-subhead">Super Admin</div>
      </md-card-header>

      <md-card-content>
        <md-list>
          <md-list-item
            v-for="link of routes"
            :key="link.route"
            :to="link.route"
          >
            <md-icon :md-src="link.iconUrl"></md-icon>
            <span class="md-list-item-text">{{ link.text }}</span>
          </md-list-item>
        </md-list>
        <md-list>
          <md-list-item>
            <md-icon :md-src="require('@/assets/icons/power.svg')"
              >power_setting</md-icon
            >
            <span class="md-list-item-text">Log Out</span>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          text: 'Overview',
          route: '/dashboard/overview',
          iconUrl: require('@/assets/icons/dashboard.svg')
        },
        {
          text: 'Reservation',
          route: '/dashboard/reservation',
          iconUrl: require('@/assets/icons/bookmark.svg')
        },
        {
          text: 'Meeting',
          route: '/dashboard/meeting',
          iconUrl: require('@/assets/icons/credit-card.svg')
        },
        {
          text: 'Customers',
          route: '/dashboard/customers',
          iconUrl: require('@/assets/icons/two-users.svg')
        },
        {
          text: 'Ticket',
          route: '/dashboard/ticket',
          iconUrl: require('@/assets/icons/ticket.svg')
        },
        {
          text: 'Message',
          route: '/dashboard/messages',
          iconUrl: require('@/assets/icons/chat-bubbles.svg')
        },
        {
          text: 'Profile',
          route: '/dashboard/profile',
          iconUrl: require('@/assets/icons/user.svg')
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.sidebar {
  width: 280px;
  position: fixed;
  height: calc(100vh - 105px);
  .md-card {
    height: 100%;
    &-header {
      border-bottom: 2px solid #eee;
      position: relative;
      &::after {
        content: '';
        width: 20px;
        height: 30px;
        position: absolute;
        background: url('./../assets/img/bookmark.png');
        background-repeat: no-repeat;
        top: -1px;
        right: 15px;
        z-index: 5;
        display: inline-block;
      }
      .md-avatar {
        border-radius: 10px;
      }
    }
    &-content {
      padding-left: 0;
      padding-right: 0;
      display: flex;
      flex-direction: column;
      .md-list {
        &:last-of-type {
          margin-top: auto;
        }
        &-item {
          &-router {
            padding: 0 10px;
            &.router-link-active {
              background-color: #f5faff;
              position: relative;
              svg {
                fill: #2290ff;
                path {
                  fill: #2290ff;
                }
              }
              &::before {
                content: '';
                height: 100%;
                width: 3px;
                background-color: #2290ff;
                position: absolute;
                left: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
