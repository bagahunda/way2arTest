import { data } from '@/infra/data/data';
import { type TDoctor, type TNurse } from '@/types';
import { ref } from 'vue';
export function usePersonal() {
  type TDoctorPayload = Omit<TDoctor, 'id'>
  type TNursePayload = Omit<TNurse, 'id'>

  const doctors = ref<TDoctor[]>(data.doctors.map((item) => {
    return {
      ...item,
      isEditing: false
    };
  }));
  const nurses = ref<TNurse[]>(data.nurses.map((item) => {
    return {
      ...item,
      isEditing: false
    };
  }));
  const addDoctor = (doctor: TDoctorPayload) => {
    const { id } = doctors.value[doctors.value.length - 1];
    const newDoctor = {
      id: String(Number(id) + 1),
      ...doctor,
    }
    doctors.value.push(newDoctor);
  }
  const addNurse = (nurse: TNursePayload) => {
    const { id } = nurses.value[nurses.value.length - 1];
    nurses.value.push({
      id: String(Number(id) + 1),
      ...nurse,
    });
  }

  const deleteDoctor = (id: string) => {
    const targetIdx = doctors.value.findIndex((item) => item.id === id);
    console.log("🚀 ~ deleteDoctor ~ targetIdx:", targetIdx)
    doctors.value = doctors.value.filter((item) => item.id !== id);
  }

  const deleteNurse = (id: string) => {
    nurses.value = nurses.value.filter((item) => item.id !== id);
  }

  return {
    doctors,
    nurses,
    addDoctor,
    addNurse,
    deleteDoctor,
    deleteNurse
  };
}