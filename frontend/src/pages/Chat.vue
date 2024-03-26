<template>
  <div class="main">
    <div class="h-100 position-relative">
      <b-row>
        <b-col cols="12" lg="6" md="6" sm="6">
          <div class="d-flex align-items-center">
            <img
              class="menuImg"
              v-b-toggle.sidebar-variant
              src="../assets/images/gpt/menu1.png"
              alt=""
            />
            <p class="heading">ApnaGPT</p>
          </div>
        </b-col>
        <b-col cols="12" lg="6" md="6" sm="6">
          <div class="d-flex justify-content-end">
            <img src="../assets/images/gpt/profile.svg" />
          </div>
        </b-col>
      </b-row>
      <div class="static-holder">
        <div
          class="d-flex justify-content-center align-items-center flex-column pt-5-"
        >
          <img class="mainAiImg" src="../assets/images/gpt/ai.png" alt="" />
          <p class="gptMainText mb-5">How can I help you today?</p>
        </div>
        <div class="promptHolder">
          <b-row>
            <b-col cols="12" lg="6" md="6" sm="12">
              <div class="defaultPrompt">
                <p class="Headingprompt">Suggest me some names...</p>
                <p class="textprompt">
                  for my cafe-by-day, bar-by-night business
                </p>
              </div>
            </b-col>
            <b-col cols="12" lg="6" md="6" sm="12">
              <div class="defaultPrompt">
                <p class="Headingprompt">Suggest me some names...</p>
                <p class="textprompt">
                  for my cafe-by-day, bar-by-night business
                </p>
              </div></b-col
            >
            <b-col cols="12" lg="6" md="6" sm="12">
              <div class="defaultPrompt">
                <p class="Headingprompt">Suggest me some names...</p>
                <p class="textprompt">
                  for my cafe-by-daFy, bar-by-night business
                </p>
              </div></b-col
            >
            <b-col cols="12" lg="6" md="6" sm="12">
              <div class="defaultPrompt">
                <p class="Headingprompt">Suggest me some names...</p>
                <p class="textprompt">
                  for my cafe-by-day, bar-by-night business
                </p>
              </div></b-col
            >
          </b-row>
        </div>
        <div class="promptHolder mt-3">
          <b-form-input
            class="promptfield"
            v-model="text"
            placeholder="Enter prompt here..."
          ></b-form-input>
        </div>
      </div>
    </div>
    <b-sidebar
      id="sidebar-variant"
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <div>
            <p>
              <img src="../assets/images/gpt/help.svg" alt="" /><span
                class="sidebarFooterSpan"
                >Help</span
              >
            </p>
            <p>
              <img src="../assets/images/gpt/activity.svg" alt="" /><span
                class="sidebarFooterSpan"
                >Activity</span
              >
            </p>
            <p>
              <img src="../assets/images/gpt/setting.svg" alt="" /><span
                class="sidebarFooterSpan"
                >Setting</span
              >
            </p>
          </div>
        </div>
      </template>
      <div class="px-3 py-2">
        <div>
          <b-button class="newChat"> + New Chat </b-button>
        </div>
        <div>
          <p class="recent">Recent</p>
          <div>
            <img src="../assets/images/gpt/prompt.svg" alt="" />
            <span class="promptHeading">Wirefram Descrp...</span>
          </div>
          <div>
            <img src="../assets/images/gpt/prompt.svg" alt="" />
            <span class="promptHeading">Wirefram Descrp...</span>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<style scoped>
.static-holder {
  position: absolute;
  bottom: 10px;
}
.promptfield {
  background-color: #131314;
  border-radius: 80px;
  border: 1px solid #38393b;
  height: 96px;
}
.promptfield::placeholder {
  color: #c5c7c5;
  font-family: "Roboto", sans-serif;
}
.promptHolder {
  padding: 0 5%;
  font-family: "Roboto", sans-serif;
}
.Headingprompt {
  color: #c5c7c5;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.textprompt {
  color: #c5c7c5;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.defaultPrompt {
  border-radius: 30px;
  padding: 5%;
  margin-top: 10px;
  border: 1px solid #38393b;
}
.menuImg {
  max-width: 50px;
}
.mainAiImg {
  max-width: 100px;
}
.promptHeading {
  color: #c5c7c5;
  font-size: 20px;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: normal;
}
.toggle-btn {
  background-color: #1e1f20;
  width: 73px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.heading {
  color: #c5c7c5;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.main {
  background-color: #131314;
  height: 100vh;
}
.newChat {
  color: #666667;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 164px;
  padding: 0;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #1a1a1c;
}
.recent {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.sidebarFooterSpan {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.gptMainText {
  color: #c5c7c5;
  text-align: center;
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
