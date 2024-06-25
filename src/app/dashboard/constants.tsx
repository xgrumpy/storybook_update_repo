
import { CarousselCardType } from '@/types/CardTypes';
import FITBIT from '@/images/fitbit.png';
import ECHO from '@/images/echo.png';
import KARDIA from '@/images/kard.png';

// Data definitions with proper typing
export const DIABETES_CARD: CarousselCardType = {
    title: 'Managing Diabetes at Home',
    description: 'Taking charge of diabetes management is crucial to lead a healthy life. At home, you can play an active role in controlling your blood sugar levels and overall well-being. Check out these valuable tips to help you stay on top of your diabetes care:',
};

export const ALZHEIMERS_CARD: CarousselCardType = {
    title: `Caring for a Loved One with Alzheimer's`,
    description: `Providing care for someone with Alzheimer's requires understanding, patience, and compassion. At home, you can create a supportive environment to enhance their quality of life. Here are some practical tips to guide you on your caregiving journey:`,
};

export const CARDIAC_HEALTH_CARD: CarousselCardType = {
    title: 'Heart Health at Home',
    description: 'Heart health is essential at every stage of life. Learn how to maintain optimal heart health with diet, exercise, and regular medical check-ups. Discover simple lifestyle changes that can make a big difference to your cardiovascular well-being.',
};

export const MENTAL_HEALTH_CARD: CarousselCardType = {
    title: 'Mental Wellness Strategies',
    description: 'Mental health is as important as physical health. Explore effective strategies to manage stress, improve your mood, and boost your overall mental well-being from the comfort of your home. Tips include mindfulness, regular exercise, and connecting with loved ones.',
};

export const FIT_BIT_CARD: CarousselCardType = {
    title: 'Fitbit watch',
    description: 'Track your health and fitness goals with ease, right from your wrist.',
    image: FITBIT
}
export const ECHO_CARD = {
    title: 'Amazon Echo',
    description: 'Get instant information, control smart devices, and enjoy entertainment with voice control.',
    image: ECHO
}
export const KARDIA_CARD = {
    title: 'Kardia',
    description: 'Monitor your heart health anytime, anywhere with this portable ECG device.',
    image: KARDIA
}


export const HEART_RATE_CARD =
{
    title: "Heart rate",
    icon: 'heart',
    date: '08/20',
    time: '4:32 PM',
    dataValue: '73',
    dataValueStyle: 'alert'
}
export const OXYGEN_CARD =
{
    title: "Oxygen",
    icon: 'oxygen',
    date: '08/20',
    time: '4:32 PM',
    dataValue: '98%',
    dataValueStyle: 'warning'
}
export const BP_CARD =
{
    title: "Blood Pressure",
    icon: 'bp',
    date: '08/20',
    time: '4:32 PM',
    dataValue: '148/90',
    dataValueStyle: 'successGreen'
}
