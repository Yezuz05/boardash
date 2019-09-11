<template>
  <md-toolbar md-elevation="2">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="logo">BOARDASH</h3>
      </div>
      <div class="search">
        <input
          type="text"
          class="search__input"
          placeholder="Search message, people, ticket"
        />
        <md-button md-elevation="0" class="search__button">
          <md-icon>search</md-icon>
        </md-button>
      </div>
      <span class="alert">
        <md-icon :md-src="require('@/assets/icons/notification.svg')"></md-icon>
        <span>Set Alert</span>
      </span>
      <div class="md-toolbar-section-end">
        <span class="admin">
          <md-avatar>
            <img src="@/assets/img/avatar.jpg" alt="Avatar" />
          </md-avatar>
          <span>Essie Howell</span>
        </span>

        <md-button class="md-icon-button">
          <md-icon
            :md-src="require('@/assets/icons/thin-add-circle-button.svg')"
          ></md-icon>
        </md-button>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
  letter-spacing: 4px;
}

.md-toolbar-row {
  padding: 0 50px;
}

.search {
  flex-grow: 1;
  height: 35px;
  border: none;
  border-radius: 4px;
  display: flex;
  margin-right: 50px;
  &__input {
    height: 100%;
    flex-grow: 1;
    text-indent: 10px;
    border: none;
    background-color: #f6f6f6;
    outline: none;
  }
  &__button {
    &.md-button.md-theme-default {
      margin: 0;
      height: 100%;
      box-shadow: none;
      background-color: #e4e4e4;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}

.alert {
  display: flex;
  align-items: center;
  .md-icon {
    margin-right: 10px;
  }
}

.admin {
  margin-right: 20px;
  .md-avatar {
    margin-right: 15px;
  }
}
</style>
