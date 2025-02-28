<script setup>
import { ref, watch } from "vue";
import Utils from "@/utils/utils.js";
import ExpandableComponent from "@/components/ExpandableComponent.vue";
import BlobEditorComponent from "@/components/TemplateBlobEditorComponent.vue";

import AddUsersForm from "@/components/forms/AddUsersForm.vue";
import CreateFileForm from "@/components/forms/CreateFileForm.vue";
import AddHostnameForm from "@/components/forms/AddHostnameForm.vue";
import AddNetworkForm from "@/components/forms/AddNetworkForm.vue";
import StartServiceForm from "@/components/forms/StartServiceForm.vue";
import ModifyServiceForm from "@/components/forms/ModifyServiceForm.vue";

import DebugAddBytesForm from "@/components/forms/DebugAddBytesForm.vue";
import DebugAnalyzeImgForm from "@/components/forms/DebugAnalyzeImgForm.vue";
import CombRegistrationForm from "@/components/forms/combustion/CombRegistrationForm.vue";
import CombSaltForm from "@/components/forms/combustion/CombSaltForm.vue";
import CombInstallPackageForm from "@/components/forms/combustion/CombInstallPackageForm.vue";
import CombAddRawBash from "../components/forms/combustion/CombAddRawBash.vue";

const formComponents = [
  AddUsersForm,
  CreateFileForm,
  AddHostnameForm,
  AddNetworkForm,
  StartServiceForm,
  ModifyServiceForm,
  CombRegistrationForm,
  CombSaltForm,
  CombInstallPackageForm,
  CombAddRawBash,

  DebugAddBytesForm,
  DebugAnalyzeImgForm,
];

const formData = ref({ debug: false });

// setup optional Watchers if a FormComponent needs it
formComponents.forEach((comp) =>
  Utils.setupFormComponentWatcher(comp, watch, formData)
);

const downloadConfigIgn = (formData) => {
  console.log("downloading..");
  Utils.saveTemplateAsFile("config.ign", toIgnitionConfig(formData));
};

const copyConfigToClipboard = (formData) => {
  Utils.copy(JSON.stringify(toIgnitionConfig(formData), null, 2));
};

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

const toIgnitionConfig = (formData) => {
  let json = {
    ignition: { version: "3.2.0" },
  };

  formComponents
    .filter((comp) => comp.methods.hasOwnProperty("encodeToIgn"))
    .forEach((comp) => comp.methods.encodeToIgn(json, formData));

  if (formData.debug) {
    json["debug:form"] = formData;
  }

  json.combustion = undefined;

  return json;
};

const toCombustionScript = (formData) => {
  let json = { combustion: "" };

  formComponents
    .filter((comp) => comp.methods.hasOwnProperty("encodeToIgn"))
    .forEach((comp) => comp.methods.encodeToIgn(json, formData));

  if (json.combustion !== "") {
    console.log(json.combustion);
    json.output =
      "#!/bin/bash\n# combustion: network\n# script generated with https://opensuse.github.io/fuel-ignition/\n" +
      "\n# Redirect output to the console\n" +
      "exec > >(exec tee -a /dev/tty0) 2>&1\n" +
      json.combustion +
      '\n# Leave a marker\necho "Configured with combustion" > /etc/issue.d/combustion';
  }

  return json.output;
};
</script>

<template>
  <section class="page-section p-2 bg-dark" id="edit">
    <div class="container mt-5 px-0">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-white text-center">
          <h1 class="mt-5">Ignition Config Generator</h1>
          <hr class="divider" />
          <div class="d-grid mb-5">
            <img
              class="text-center mx-auto w-50"
              src="@/assets/template/img/undraw_programming_re_kg9v.svg"
            />
          </div>
        </div>
      </div>

      <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
        <div class="col-lg-6">
          <div class="form-floating mb-3">
            <FormKit type="group" v-model="formData">
              <ExpandableComponent title="Add Users" :displayAtLeastOne="false">
                <AddUsersForm></AddUsersForm>
              </ExpandableComponent>

              <ExpandableComponent
                title="Create Files"
                :displayAtLeastOne="false"
              >
                <CreateFileForm></CreateFileForm>
              </ExpandableComponent>

              <ExpandableComponent
                title="Add Hostname"
                :displayAtLeastOne="false"
		:maxComponents="1"
              >
                <AddHostnameForm></AddHostnameForm>
              </ExpandableComponent>

              <ExpandableComponent
                title="Add Network Interface"
                :displayAtLeastOne="false"
              >
                <AddNetworkForm></AddNetworkForm>
              </ExpandableComponent>

              <ExpandableComponent
                title="Enable or Create Services"
                :displayAtLeastOne="false"
              >
                <StartServiceForm></StartServiceForm>
              </ExpandableComponent>

              <ExpandableComponent
                title="Modify Existing Services"
                :displayAtLeastOne="false"
              >
                <ModifyServiceForm></ModifyServiceForm>
              </ExpandableComponent>

              <div v-if="formData.debug">
                <!-- rename to "Modify Services (Drop-Ins)"? -->
                <ExpandableComponent
                  title="DEBUG: Add Bytes"
                  :displayAtLeastOne="false"
                >
                  <DebugAddBytesForm></DebugAddBytesForm>
                </ExpandableComponent>

                <ExpandableComponent
                  title="DEBUG: Analyze File"
                  :displayAtLeastOne="true"
                  :maxComponents="1"
                >
                  <DebugAnalyzeImgForm></DebugAnalyzeImgForm>
                </ExpandableComponent>
              </div>
            </FormKit>
          </div>
        </div>
      </div>

      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-white text-center">
          <h1 class="mt-5">Add Combustion Scripts</h1>
          <hr class="divider" />
          <div class="d-grid mb-5">
            <img
              class="text-center mx-auto w-50"
              src="@/assets/template/img/undraw_building_blocks_re_5ahy.svg"
            />
          </div>
        </div>

        <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div class="col-lg-6">
            <div class="form-floating mb-3">
              <FormKit type="group" v-model="formData">
                <ExpandableComponent
                  title="Register Product"
                  :displayAtLeastOne="false"
                >
                  <CombRegistrationForm></CombRegistrationForm>
                </ExpandableComponent>

                <ExpandableComponent
                  title="Connect to Salt Master"
                  :maxComponents="1"
                  :displayAtLeastOne="false"
                >
                  <CombSaltForm></CombSaltForm>
                </ExpandableComponent>

                <ExpandableComponent
                  title="Install Package With Combustion"
                  :displayAtLeastOne="false"
                >
                  <CombInstallPackageForm></CombInstallPackageForm>
                </ExpandableComponent>

                <ExpandableComponent
                  title="Add Custom Lines To Combustion Script"
                  :displayAtLeastOne="false"
                >
                  <CombAddRawBash></CombAddRawBash>
                </ExpandableComponent>
              </FormKit>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="divider" />
  </section>

  <section class="page-section p-2" id="export">
    <div class="container mt-5 px-0">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6">
          <h1 class="mt-5 text-center">config.ign</h1>
          <hr class="divider" />
          <div class="d-grid mb-5">
            <pre class="form-data">{{ toIgnitionConfig(formData) }}</pre>

            <div class="double">
              <FormKit
                v-model="formData.debug"
                type="checkbox"
                label="Debug"
                name="debug"
              />

              <button
                class="btn btn-outline-secondary mb-2"
                @click="copyConfigToClipboard(formData)"
              >
                Copy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clipboard"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                  />
                  <path
                    d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                  />
                </svg>
              </button>
            </div>

            <button
              class="btn btn-primary mb-4"
              @click="downloadConfigIgn(formData)"
            >
              Download
            </button>

            <div v-if="toCombustionScript(formData) !== undefined">
              <h1 class="mt-5 text-center">combustion script</h1>
              <hr class="divider" />
              <div class="d-grid mb-5">
                <pre class="form-data">{{ toCombustionScript(formData) }}</pre>

                <button
                  class="btn btn-primary mb-4"
                  @click="
                    Utils.saveTemplateAsFile(
                      'script',
                      toCombustionScript(formData),
                      true // isNotJson parameter
                    )
                  "
                >
                  Download
                </button>
              </div>
            </div>

            <div>
              <h2 class="mt-5 text-center">
                Convert to Ignition-<span
                  v-if="toCombustionScript(formData) !== undefined"
                  >Combustion-</span
                >Ready Filesystem IMG in the Browser
              </h2>

              <BlobEditorComponent
                :ignJson="toIgnitionConfig(formData)"
                :combustionScript="toCombustionScript(formData)"
              ></BlobEditorComponent>
            </div>

            <h2 class="mt-5 text-center">
              Convert to ISO Filesystem with mkisofs
            </h2>

            <pre class="form-data">
# mkisofs -full-iso9660-filenames -o ignition.iso -V ignition config.ign</pre
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
