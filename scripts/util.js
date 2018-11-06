function FormatDate2CN(date = new Date(), format = 'YYYY.MM.DD hh:mm:ss') {
    date = new Date(date);
    date.setTime(date.getTime() + 8 * 60 * 60 * 1000);
    format = format.replace('YYYY', '$1')
        .replace('MM', '$2')
        .replace('DD', '$3')
        .replace('hh', '$4')
        .replace('mm', '$5')
        .replace('ss', '$6');
    return date.toJSON().replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z/, format);
}

module.exports = {
    FormatDate2CN
}