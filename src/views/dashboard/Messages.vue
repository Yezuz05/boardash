<template>
  <div class="content">
    <div class="content__header">
      <h1>Messages</h1>
      <div class="content__filter"></div>
    </div>
    <div class="content__body">
      <div class="messages">
        <div class="messages__stats">
          <div class="messages__stats__info">
            <span class="messages__stats__info__icon">
              <md-icon
                :md-src="require('@/assets/icons/chat-bubbles.svg')"
              ></md-icon>
            </span>
            <div>
              <p>Overall Messages</p>
              <h1>2389&nbsp;<small>This month</small></h1>
            </div>
          </div>
          <div class="messages__stats__info">
            <span class="messages__stats__info__icon">
              <md-icon
                :md-src="require('@/assets/icons/send-button.svg')"
              ></md-icon>
            </span>
            <div>
              <p>Sent Messages</p>
              <h1>1494&nbsp;<small>This month</small></h1>
            </div>
          </div>
          <div class="messages__stats__info">
            <span class="messages__stats__info__icon">
              <md-icon
                :md-src="require('@/assets/icons/backward-arrow.svg')"
              ></md-icon>
            </span>
            <div>
              <p>Received Messages</p>
              <h1>895&nbsp;<small>This month</small></h1>
            </div>
          </div>
        </div>
        <md-card>
          <md-progress-bar
            v-if="isFetchingUsers"
            md-mode="indeterminate"
          ></md-progress-bar>
          <md-list class="md-triple-line">
            <md-list-item v-for="user of users" :key="user.id">
              <md-checkbox v-model="user.checked" value="preview" />
              <md-avatar>
                <img :src="user.avatar_url" alt="People" />
              </md-avatar>
              <p>{{ user.name }}</p>
              <span v-if="user.location">{{ user.location }}</span>
              <div class="md-list-item-text">
                <p>
                  {{ user.bio }}
                </p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>more_vert</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/api.service.js';

export default {
  data() {
    return {
      notification: false,
      isFetchingUsers: false,
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.isFetchingUsers = true;
      apiService.getAllUsers().then(res => {
        const profileRequests = res.data.map(({ login }) => {
          return this.getUserData(login);
        });
        Promise.all(profileRequests).then(responses => {
          this.users = responses.map(response => response.data);
          this.isFetchingUsers = false;
        });
      });
    },
    getUserData(name) {
      return apiService.getUserData(name);
    }
  }
};
</script>

<style lang="scss">
.content {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    h1 {
      font-weight: 500;
    }
  }

  &__body {
    .messages {
      &__stats {
        height: 140px;
        width: 100%;
        background-color: $white;
        border: 2px solid #ddd;
        border-radius: 4px;
        padding: 0 30px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 30px;
        &__info {
          display: flex;
          align-items: center;
          &:nth-child(2) {
            position: relative;
            justify-self: center;
            &::after,
            &::before {
              position: absolute;
              content: '';
              width: 1px;
              height: 50px;
              background-color: #ddd;
            }
            &::after {
              right: -60px;
            }
            &::before {
              left: -50px;
            }
          }
          &:last-child {
            justify-self: right;
          }
          &__icon {
            display: inline-block;
            height: 70px;
            width: 70px;
            border-radius: 50%;
            position: relative;
            background-color: #f2f9ff;
            margin-right: 20px;
            .md-icon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              svg {
                fill: #2290ff;
                path,
                polygon {
                  fill: #2290ff;
                }
              }
            }
          }
          div {
            p {
              margin-bottom: 5px;
            }
            h1 {
              small {
                font-size: small;
                font-weight: 400;
                color: #ddd;
              }
            }
          }
        }
      }
      .md-list {
        &-item {
          &:not(:last-child) {
            border-bottom: 1px solid #ccc;
          }
          &-content {
            .md-avatar {
              margin: 4px 20px 4px 0;
            }
            p {
              font-weight: 500;
              margin-right: 20px;
            }
            & > span {
              display: flex;
              text-align: center;
              align-items: center;
              padding: 0 10px;
              margin-right: 10px;
              height: 30px;
              border-radius: 4px;
              background-color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
