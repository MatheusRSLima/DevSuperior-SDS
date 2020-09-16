import moment from 'moment';

export const formatDate = (data:string) => {
    return moment().format('DD/MM/YYYY HH:mm');
}