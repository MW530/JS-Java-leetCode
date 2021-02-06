char* interpret(char* command) {
	int len = strlen(command);
	char* ret = (char*)malloc((len + 1) * sizeof(char));
	int j = 0;
	for (int i = 0; i < len; i++)
	{
		if (command[i] == 'G')
			ret[j++] = command[i];
		else if (command[i] == '(')
		{
			if (command[i + 1] == ')')
			{
				ret[j++] = 'o';
				i++;
			}
			else
			{
				ret[j++] = 'a';
				ret[j++] = 'l';
				i += 3;
			}
		}
	}
	ret[j] = '\0';
	return ret;
}
