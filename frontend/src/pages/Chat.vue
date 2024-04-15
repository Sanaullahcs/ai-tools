<template>
  <div class="main">
    <div class="h-100 position-relative">
      <div class="pa-3 navbar">
        <b-row style="width: 100%">
          <b-col cols="12" lg="6" md="6" sm="6">
            <div class="d-flex align-items-center">
              <img
                class="menuImg"
                v-b-toggle.sidebar-variant
                src="../assets/images/gpt/menu1.png"
                alt=""
              />
              <p class="heading ms-3">ApnaGPT</p>
            </div>
          </b-col>
          <b-col cols="12" lg="6" md="6" sm="6">
            <div class="d-flex justify-content-end">
              <img src="../assets/images/gpt/profile.svg" />
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="static-holder">
        <div>
          <div class="gptHolder">
            <!-- Before the response -->
            <div>
              <div
                class="d-flex justify-content-center align-items-center flex-column pt-5-"
              >
                <img
                  class="mainAiImg"
                  src="../assets/images/gpt/ai.png"
                  alt=""
                />
                <p class="gptMainText mb-5 mt-3">How can I help you today?</p>
              </div>
              <div class="promptHolder">
                <b-row>
                  <b-col cols="12" lg="6" md="6" sm="12">
                    <div class="defaultPrompt">
                      <p class="Headingprompt">Suggest me some names...</p>
                      <p class="textprompt">
                        for my cafe-by-day, bar-by-night business
                      </p>

                      <img
                        class="arrow"
                        src="../../src/assets/images/input/arrow.svg"
                        alt="mic"
                      />
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6" md="6" sm="12">
                    <div class="defaultPrompt">
                      <p class="Headingprompt">Suggest me some names...</p>
                      <p class="textprompt">
                        for my cafe-by-day, bar-by-night business
                      </p>

                      <img
                        class="arrow"
                        src="../../src/assets/images/input/arrow.svg"
                        alt="mic"
                      /></div
                  ></b-col>
                  <b-col cols="12" lg="6" md="6" sm="12">
                    <div class="defaultPrompt">
                      <p class="Headingprompt">Suggest me some names...</p>
                      <p class="textprompt">
                        for my cafe-by-daFy, bar-by-night business
                      </p>

                      <img
                        class="arrow"
                        src="../../src/assets/images/input/arrow.svg"
                        alt="mic"
                      /></div
                  ></b-col>
                  <b-col cols="12" lg="6" md="6" sm="12">
                    <div class="defaultPrompt">
                      <p class="Headingprompt">Suggest me some names...</p>
                      <p class="textprompt">
                        for my cafe-by-day, bar-by-night business
                      </p>

                      <img
                        class="arrow"
                        src="../../src/assets/images/input/arrow.svg"
                        alt="mic"
                      /></div
                  ></b-col>
                </b-row>
              </div>
            </div>
            <!-- After the response -->
            <div style="margin: 0 10%">
              <div>
                <div class="userPromptProfile">
                  <img src="../assets/images/gpt/profile.svg" />
                  <p class="promptProfileName">You</p>
                </div>
                <div class="userPrompt">
                  <p class="commonTxt">
                    Make an interactive graph or pie chart of the following text
                    "Unfortunately, 5.8 million people miss or experience
                    delayed appointments due to transportation issues each year.
                    Inadequate or no transportation has become one of the top
                    five social determinants of health. Missing appointments
                    causes volatility in healthcare operations and results in
                    deteriorating patient health with lower patient
                    satisfaction. Safr Care software is leading the industry for
                    improved efficiencies in wheelchair transportation services,
                    elderly assistance, and transporting the infirm."
                  </p>
                </div>
              </div>
              <div>
                <div class="gptPromptProfile">
                  <img src="../assets/images/input/ai.svg" />
                  <p class="promptProfileName">ApnaGPT</p>
                </div>
                <div class="gptPrompt">
                  <p class="commonTxt">
                    Unfortunately, I cannot directly generate interactive charts
                    or graphs. However, I can offer you some ideas on how to
                    present the information from the text in an engaging and
                    informative way: Option 1: Stacked Bar Chart: Bars: Green:
                    Number of people who attend appointments without
                    transportation issues. Red: Number of people who miss or
                    experience delayed appointments due to transportation issues
                    (5.8 million). Labels: X-axis: "Appointment Attendance
                    with/without Transportation Issues" Y-axis: "Number of
                    People (Millions)"
                  </p>
                  <div class="gptActionsButton">
                    <img src="../assets/images/gpt/volume.svg" />
                    <img src="../assets/images/gpt/copy.svg" />
                    <img src="../assets/images/gpt/again.svg" />
                    <img src="../assets/images/gpt/dislike.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="promptHolder mt-3">
            <b-form-input
              class="promptfield"
              placeholder="Enter prompt here..."
            >
              <b-icon-arrow-up></b-icon-arrow-up>
              <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
            </b-form-input>
            <div class="imgs-holder">
              <img
                src="../../src/assets/images/input/gallery.svg"
                alt="import"
              />
              <img src="../../src/assets/images/input/mic.svg" alt="mic" />
              <img src="../../src/assets/images/input/send.svg" alt="enter" />
            </div>
          </div>
          <p class="bottomText">
            ApnaGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
    <b-sidebar
      id="sidebar-variant"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <div>
            <p class="footerLinks">
              <img src="../assets/images/gpt/help.svg" alt="" /><span
                class="sidebarFooterSpan"
                >Help</span
              >
            </p>
            <p class="footerLinks">
              <img src="../assets/images/gpt/activity.svg" alt="" /><span
                class="sidebarFooterSpan"
                >Activity</span
              >
            </p>
            <p class="footerLinks">
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
          <b-button class="newChat my-2"> + New Chat </b-button>
        </div>
        <div>
          <p class="recent">Recent</p>
          <div class="promptTitle">
            <img src="../assets/images/gpt/prompt.svg" alt="" />
            <span class="promptHeading my-2">Wireframe Description</span>
          </div>
          <div class="promptTitle">
            <img src="../assets/images/gpt/prompt.svg" alt="" />
            <span class="promptHeading my-2">Wireframe Description</span>
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
  height: 80px;
  color: #c5c7c5;
  padding-left: 30px;
}
.promptfield::placeholder {
  color: #c5c7c5;
  font-family: "Roboto", sans-serif;
}
.promptHolder {
  margin: 0 10%;
  font-family: "Roboto", sans-serif;
  position: relative;
}
.imgs-holder {
  position: absolute;
  top: 2px;
  right: 5px;
}
.imgs-holder img {
  margin: 0px 0px 0px 20px;
  cursor: pointer;
}
.Headingprompt {
  color: #c5c7c5;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.bottomText {
  color: #666667;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  margin-top: 10px;
  font-weight: 400;
  line-height: normal;
}
.textprompt {
  color: #c5c7c5;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin-top: 10px;
  font-weight: 400;
  line-height: normal;
}
.gptHolder {
  max-height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}
.gptHolder::-webkit-scrollbar {
  width: 8px;
}

.gptHolder::-webkit-scrollbar-track {
  background-color: #131314;
}

.gptHolder::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.gptHolder::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
.defaultPrompt {
  border-radius: 30px;
  padding: 5%;
  margin-top: 10px;
  border: 1px solid #38393b;
  height: 92px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.defaultPrompt:hover {
  background-color: #38393b;
}
.defaultPrompt:hover .arrow {
  display: block;
}
.arrow {
  max-width: 100px;
  position: absolute;
  right: 20px;
  display: none;
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
  font-family: "Roboto", sans-serif;
  background: #1a1a1c;
  margin-bottom: 30px !important;
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
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
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
.navbar {
  padding: 2%;
}
.promptTitle {
  margin: 10px 0px;
}
.footerLinks {
  margin-bottom: 10px;
}
.userPromptProfile,
.gptPromptProfile {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.gptPrompt,
.userPrompt {
  padding: 0 5%;
}
.promptProfileName {
  color: #fff;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
  font-weight: 700;
  line-height: normal;
}
.commonTxt {
  color: #c5c7c5;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
}
.gptActionsButton {
  display: flex;
  gap: 1rem;
  margin-top: 4%;
}
.gptActionsButton img {
  cursor: pointer;
}
</style>
