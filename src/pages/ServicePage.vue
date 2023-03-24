<template>
  <q-page padding>
    <div class="text-h5 q-mt-md">Serviço</div>
    <q-separator />
    <br />
    <div class="q-gutter-y-md">
      <q-card>
        <q-tab-panels v-model="tab" animated style="max-height: 70%">
          <q-tab-panel name="customer" class="q-gutter-y-md">
            <q-input stack-label label="Nº cliente" />
            <q-input stack-label label="Nome" />
            <q-input stack-label label="Morada" />
            <q-input stack-label label="Contribuinte" />
            <q-input stack-label label="E-mail" />
            <q-input stack-label label="Contato" />
          </q-tab-panel>

          <q-tab-panel name="service" class="q-gutter-y-md">
            <p class="text-subtitle1">Tipo de serviço</p>
            <q-option-group
              inline
              v-model="group"
              :options="options"
              color="primary"
              type="checkbox"
            />

            <q-input stack-label label="Nome do funcionário" />
            <q-separator />
            <div class="row q-col-gutter-xs">
              <q-input outlined label="Designação" class="col-12" />
              <q-input outlined label="Quantidade" class="col-6" />
              <q-input outlined label="Valor" class="col-6" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="sign" class="q-gutter-y-sm">
            <div>
              <p class="text-subtitle1">
                Autorização para o tratamento dos dados pessoais
              </p>
              <q-option-group
                inline
                v-model="dataProtect"
                :options="radioOptions"
                color="primary"
              />
            </div>

            <q-separator />

            <div>
              <p class="text-subtitle1">
                Fui informado dos valores para os serviços que serão prestados
              </p>
              <q-option-group
                inline
                v-model="amountAccepted"
                :options="radioOptions"
                color="primary"
              />
            </div>

            <q-separator />

            <div
              class="q-mt-md rounded-borders shadow-3"
              style="border: double 1px"
            >
              <q-bar class="bg-primary">
                <div class="text-subtitle1 text-white">Assinatura</div>
                <q-space />
                <q-btn
                  dense
                  flat
                  icon="backspace"
                  color="white"
                  @click="clearSign"
                />
              </q-bar>

              <VueSignaturePad ref="signaturePad" height="7rem" />
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />

        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3"
          align="justify"
          narrow-indicator
        >
          <q-tab name="customer" label="Cliente" />
          <q-tab name="service" label="Serviço" />
          <q-tab name="sign" label="Assinatura" />
        </q-tabs>
      </q-card>

      <div class="row justify-end q-gutter-x-md">
        <q-btn label="Cancelar" />
        <q-btn label="Salvar" color="primary" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { VueSignaturePad } from "vue-signature-pad";

export default defineComponent({
  name: "ServicePage",

  components: {
    VueSignaturePad,
  },

  setup() {
    const signaturePad = ref(null);
    const clearSign = () => signaturePad.value.undoSignature();

    return {
      tab: ref("customer"),
      group: ref([]),
      dataProtect: ref("r1"),
      amountAccepted: ref("r1"),
      signaturePad,
      clearSign,

      options: [
        {
          label: "Desentupimento",
          value: "op1",
        },
        {
          label: "Canalização",
          value: "op2",
        },
        {
          label: "Aspiração de Águas",
          value: "op3",
        },
        {
          label: "Inspeção Vídeo",
          value: "op4",
        },
        {
          label: "Manutenção Preventiva",
          value: "op5",
        },
        {
          label: "Limpeza",
          value: "op6",
        },
        {
          label: "Outros",
          value: "op7",
        },
      ],
      radioOptions: [
        {
          label: "Sim",
          value: "r1",
        },
        {
          label: "Não",
          value: "r2",
        },
      ],
    };
  },
});
</script>
